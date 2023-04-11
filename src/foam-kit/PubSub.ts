interface ListenerNode {
  l?: Function;
  next?: ListenerNode;
  prev?: ListenerNode;
  detach?: () => void;
  children?: { [topic: string]: ListenerNode };
}

export class PubSub {
  private listeners: ListenerNode;

  constructor() {
    this.listeners = {
      next: null,
      children: null,
    };
  }

  sub(...args): () => void {
    const topic = args.slice(0, args.length - 1);
    const fn = args[args.length - 1];

    let localListeners = this.listeners;

    for (let i = 0; i < topic.length; i++) {
      // if we have no children yet, instantiate with an object
      if (!localListeners.children) localListeners.children = {};

      // if the listener doesn't exist yet, set it to an empty object
      if (!localListeners.children[topic[i]])
        localListeners.children[topic[i]] = {};

      localListeners = localListeners.children[topic[i]];
    }

    const node: ListenerNode = {
      l: fn,
      prev: localListeners,
      next: localListeners.next,
      detach: function () {},
    };

    if (localListeners.next) localListeners.next.prev = node;
    localListeners.next = node;

    return node.detach;
  }

  pub(...args) {
    let listeners = this.listeners;

    let i = 0;
    while (listeners) {
      let node = listeners.next;

      while (node) {
        let next = node.next;
        node.l.call(undefined, node.detach, ...args);
        node = next;
      }

      listeners =
        listeners.children && i < args.length
          ? listeners.children[args[i++]]
          : null;
    }
  }
}
