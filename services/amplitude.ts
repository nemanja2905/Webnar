/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull test'
 *
 * Required dependencies: amplitude-js@^8.18.0
 * Tracking Plan Version: 2
 * Build: 1.0.0
 * Runtime: browser:javascript-ampli
 *
 * [View Tracking Plan](https://data.amplitude.com/tcsp/test-tcsp/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/tcsp/test-tcsp/implementation/test)
 */

import amplitude from "amplitude-js";

/**
 * @typedef BaseEvent
 * @type {object}
 * @property {string} event_type
 * @property {Object.<string, *>} [event_properties]
 */

/**
 * @typedef Plan
 * @type {object}
 * @property {string} [branch]
 * @property {string} [source]
 * @property {string} [version]
 * @property {string} [versionId]
 */

/**
 * Data to be processed by middleware
 * @typedef MiddlewarePayload
 * @type {object}
 * @property {BaseEvent} event
 * @property {MiddlewareExtra} [extra]
 */

/**
 * Function called at the end of each Middleware to run the next middleware in the chain
 * @typedef MiddlewareNext
 * @type {function}
 * @param {MiddlewarePayload} payload
 *
 * @return
 */

/**
 * A function to run on the Event stream (each logEvent call)
 * @typedef Middleware
 * @type {function}
 * @param {MiddlewarePayload} payload The event and extra data being sent
 * @param {MiddlewareNext} next Function to run the next middleware in the chain, not calling next will end the middleware chain
 * @return
 */

/**
 * @typedef LoadClientOptions
 * @type {object}
 * @property {string} [apiKey]
 * @property {Object} [options]
 * @property {AmplitudeClient} [instance]
 */

/**
 * @typedef LoadOptions
 * @type {object}
 * @property {'development'|'production'} [environment]
 * @property {boolean} [disabled]
 * @property {LoadClientOptions} [client]
 */

/**
 * @typedef {Object} EventOptions
 * @type {object}
 */

/**
 * @typedef {Object} IdentifyOptions
 * @type {object}
 */

/**
 * @typedef {Object} GroupOptions
 * @type {object}
 */

/**
 * @typedef {Object} MiddlewareExtra
 * @type {Object.<string, *>}
 */

/**
 * @typedef ApiKey
 * @type {object}
 * @property {string} development
 * @property {string} production
 */
export const ApiKey = {
  development: "caee194ea89495a4df5face54eea38b4",
  production: "",
};

export const SpecialEventType = {
  Identify: "Identify",
  Group: "Group",
};

/**
 * Default Amplitude configuration options. Contains tracking plan information.
 */
export const DefaultOptions = {
  plan: {
    version: "2",
    branch: "main",
    source: "test",
    versionId: "87a4036f-2861-4005-87c5-5c7252b7295e",
  },
};

export class Identify {
  event_type: string;
  event_properties: any;
  constructor(properties) {
    this.event_type = "Identify";
    this.event_properties = properties;
  }
}

export class Group {
  event_type: string;
  constructor() {
    this.event_type = "Group";
  }
}

// prettier-ignore
export class Ampli {
  amplitude: any;
  disabled: boolean;
  middlewares: any[];

  constructor() {
    /* @type {AmplitudeClient|undefined} */
    this.amplitude = undefined;
    this.disabled = false;
    /* @type {Middleware[]} */
    this.middlewares = [];
  }

  /**
   * @return {AmplitudeClient}
   */
  get client() {
    this.isInitializedAndEnabled();
    return this.amplitude;
  }

  /**
   * @private
   * @return {boolean}
   */
  isInitializedAndEnabled() {
    if (!this.amplitude) {
      console.error(
        "ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?"
      );
      return false;
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   * @param {LoadOptions} [options] Configuration options to initialize the Ampli SDK with.
   */
  load(options) {
    this.disabled = options?.disabled ?? false;

    if (this.amplitude) {
      console.warn(
        "WARNING: Ampli is already intialized. Ampli.load() should be called once at application startup."
      );
      return;
    }

    const env = options?.environment ?? "development";
    const apiKey = options?.client?.apiKey ?? ApiKey[env];

    if (options?.client?.instance) {
      this.amplitude = options?.client?.instance;
    } else if (apiKey) {
      this.amplitude = amplitude.getInstance();
      this.amplitude?.init(apiKey, undefined, {
        ...DefaultOptions,
        ...(options?.client?.options ?? options?.client?.config),
      });
    } else {
      console.error(
        "ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'"
      );
    }
  }

  /**
   * Identify a user and set or update that user's properties.
   *
   * @param {string|undefined} userId The user's id.
   * @param {Object} [properties] The user's properties.
   * @param {*} [properties.date_optin] Property has no description in tracking plan.
   * @param {*} [properties.gclid] Property has no description in tracking plan.
   * @param {*} [properties.id] Property has no description in tracking plan.
   * @param {*} [properties.initial_gclid] Property has no description in tracking plan.
   * @param {*} [properties.initial_referrer] Property has no description in tracking plan.
   * @param {*} [properties.initial_referring_domain] Property has no description in tracking plan.
   * @param {*} [properties.initial_utm_campaign] Property has no description in tracking plan.
   * @param {*} [properties.initial_utm_content] Property has no description in tracking plan.
   * @param {*} [properties.initial_utm_medium] Property has no description in tracking plan.
   * @param {*} [properties.initial_utm_source] Property has no description in tracking plan.
   * @param {*} [properties.initial_utm_term] Property has no description in tracking plan.
   * @param {*} [properties.referrer] Property has no description in tracking plan.
   * @param {*} [properties.referring_domain] Property has no description in tracking plan.
   * @param {*} [properties.trait1] Property has no description in tracking plan.
   * @param {*} [properties.trait2] Property has no description in tracking plan.
   * @param {*} [properties.trait3] Property has no description in tracking plan.
   * @param {*} [properties.utm_campaign] Property has no description in tracking plan.
   * @param {*} [properties.utm_content] Property has no description in tracking plan.
   * @param {*} [properties.utm_medium] Property has no description in tracking plan.
   * @param {*} [properties.utm_source] Property has no description in tracking plan.
   * @param {*} [properties.utm_term] Property has no description in tracking plan.
   * @param {IdentifyOptions} [options] Optional event options.
   * @param {MiddlewareExtra} [extra] Extra unstructured data for middleware.
   */
  identify(userId, properties, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    const event = {
      event_type: SpecialEventType.Identify,
      event_properties: properties,
      user_id: userId || options?.user_id,
      device_id: options?.device_id,
    };
    this.runMiddleware({ event, extra }, (payload) => {
      const e = payload.event;
      if (e.user_id) {
        this.amplitude.setUserId(e.user_id);
      }
      if (e.device_id) {
        this.amplitude.setDeviceId(e.device_id);
      }
      const ampIdentify = new amplitude.Identify();
      if (e.event_properties != null) {
        for (const [key, value] of Object.entries(e.event_properties)) {
          ampIdentify.set(key, value as string);
        }
      }
      this.amplitude.identify(
        ampIdentify,
        options?.callback,
        options?.errorCallback
      );
    });
  }

  /**
   * Set Group for the current user
   *
   * @param {String} name
   * @param {String|String[]} value
   * @param {GroupOptions} [options]
   * @param {MiddlewareExtra} [extra]
   */
  setGroup(name, value, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.amplitude?.setGroup(name, value);
  }

  /**
   * Identify a group.
   *
   * @param {string} groupType The group type.
   * @param {string|string[]} groupName The group name.
   * @param {GroupOptions} [options] Options for this groupIdentify call.
   * @param {MiddlewareExtra} [extra] Extra untyped parameters for use in middleware.
   */
  groupIdentify(groupType, groupName, options, extra) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    const event = {
      event_type: SpecialEventType.Group,
      user_id: options?.user_id,
      device_id: options?.device_id,
    };
    this.runMiddleware({ event, extra }, (payload) => {
      const e = payload.event;
      if (e.user_id) {
        this.amplitude.setUserId(e.user_id);
      }
      if (e.device_id) {
        this.amplitude.setDeviceId(e.device_id);
      }
      const amplitudeIdentify = new amplitude.Identify();
      if (e.event_properties != null) {
        for (const [key, value] of Object.entries(e.event_properties)) {
          amplitudeIdentify.set(key, value as string);
        }
      }
      this.amplitude.groupIdentify(
        groupType,
        groupName,
        amplitudeIdentify,
        options?.callback
      );
    });
  }

  /**
   * Track event
   *
   * @param {BaseEvent} event The event to track.
   * @param {EventOptions} [options] Optional event options.
   * @param {MiddlewareExtra} [extra] Extra unstructured data for middleware.
   */
  track(event: {
    event_type: string,
    event_properties: any
  }, options?: any, extra?: any) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }
    
    this.runMiddleware({ event, extra }, (payload) => {
      console.log(event);
      this.amplitude.logEvent(
        payload.event.event_type,
        payload.event.event_properties,
        options?.callback,
        options?.errorCallback
      );
    });
  }

  /**
   * Add new middleware to end of chain
   *
   * @param {Middleware} middleware
   */
  addEventMiddleware(middleware) {
    this.middlewares.push(middleware);
  }

  /**
   * Runs all middleware
   *
   * @param {MiddlewarePayload} payload
   * @param {MiddlewareNext} next The method to run after all middleware.
   *
   * @protected
   */
  runMiddleware(payload, next) {
    let curMiddlewareIndex = -1;
    const middlewareCount = this.middlewares.length;

    const middlewareNext = (curPayload) => {
      curMiddlewareIndex += 1;
      if (curMiddlewareIndex < middlewareCount) {
        this.middlewares[curMiddlewareIndex](curPayload, _next);
      } else {
        next(curPayload);
      }
    };

    const _next = middlewareCount > 0 ? middlewareNext : next;

    _next(payload);
  }
}

export const ampli = new Ampli();
