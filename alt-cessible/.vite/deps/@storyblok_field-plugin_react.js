import {
  __toESM,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/valibot/dist/index.js
var EMOJI_REGEX = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex, regexp/no-dupe-disjunctions -- false positives
  new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}))*)+$", "u")
);

// node_modules/@storyblok/field-plugin/dist/index.mjs
var hasKey = (obj, key) => typeof obj === "object" && obj !== null && key in obj;
var isCloneable = (obj) => {
  try {
    structuredClone(obj);
    return true;
  } catch {
    return false;
  }
};
var random8 = () => Math.random().toString(16).slice(2, 2 + 8);
var getRandomUid = () => new Array(4).fill(0).map(random8).join("-");
var isFieldPluginOption = (it) => hasKey(it, "name") && typeof it.name === "string" && hasKey(it, "value") && typeof it.value === "string";
var isFieldPluginSchema = (it) => hasKey(it, "field_type") && typeof it.field_type === "string" && hasKey(it, "options") && Array.isArray(it.options) && it.options.every(isFieldPluginOption) && (!hasKey(it, "translatable") || hasKey(it, "translatable") && typeof it.translatable === "boolean");
var isMessageToPlugin = (obj) => hasKey(obj, "action") && typeof obj.action === "string" && hasKey(obj, "uid") && typeof obj.uid === "string";
var isStoryData = (data) => hasKey(data, "content") && typeof data.content === "object" && data.content !== null && !Array.isArray(data.content);
var isLoadedMessage = (data) => isMessageToPlugin(data) && data.action === "loaded" && hasKey(data, "language") && typeof data.language === "string" && hasKey(data, "schema") && isFieldPluginSchema(data.schema) && hasKey(data, "userId") && (typeof data.userId === "number" || typeof data.userId === "undefined") && hasKey(data, "story") && isStoryData(data.story) && hasKey(data, "isAIEnabled") && typeof data.isAIEnabled === "boolean" && hasKey(data, "isModalOpen") && typeof data.isModalOpen === "boolean";
var isStateMessage = (data) => isMessageToPlugin(data) && data.action === "state-changed" && hasKey(data, "language") && typeof data.language === "string" && hasKey(data, "schema") && isFieldPluginSchema(data.schema) && hasKey(data, "userId") && (typeof data.userId === "number" || typeof data.userId === "undefined") && hasKey(data, "story") && isStoryData(data.story) && hasKey(data, "isAIEnabled") && typeof data.isAIEnabled === "boolean" && hasKey(data, "isModalOpen") && typeof data.isModalOpen === "boolean";
var recordFromFieldPluginOptions = (options) => options.reduce(
  (options2, option) => {
    options2[option.name] = option.value;
    return options2;
  },
  {}
);
var isAsset = (data) => hasKey(data, "filename") && typeof data.filename === "string" && hasKey(data, "asset") && typeof data.asset === "object";
var assetFromAssetSelectedMessage = (message) => {
  const { asset } = message;
  return asset;
};
var isAssetSelectedMessage = (data) => isMessageToPlugin(data) && data.action === "asset-selected" && hasField$1(data) && isAsset(data);
var hasField$1 = (data) => {
  if (!hasKey(data, "field") || typeof data.field === "undefined") {
    return true;
  }
  return typeof data.field === "string";
};
var isContextRequestMessage = (data) => isMessageToPlugin(data) && data.action === "get-context" && hasKey(data, "story") && isStoryData(data.story);
var isUserData = (data) => hasKey(data, "isSpaceAdmin") && typeof data.isSpaceAdmin === "boolean" && hasKey(data, "permissions") && data.permissions !== null && (typeof data.permissions === "object" || typeof data.permissions === "undefined") && !Array.isArray(data.permissions);
var isUserContextRequestMessage = (data) => isMessageToPlugin(data) && data.action === "get-user-context" && hasKey(data, "user") && isUserData(data.user);
var isPreviewDimensionResponse = (data) => isMessageToPlugin(data) && data.action === "preview-dimension";
var isPromptAIMessage = (data) => isMessageToPlugin(data) && data.action === "prompt-ai" && hasKey(data, "aiResponse") && typeof data.aiResponse === "object" && data.aiResponse !== null && hasKey(data.aiResponse, "ok") && typeof data.aiResponse.ok === "boolean" && (data.aiResponse.ok ? hasKey(data.aiResponse, "answer") && typeof data.aiResponse.answer === "string" : hasKey(data.aiResponse, "error") && typeof data.aiResponse.error === "string");
var getResponseFromPromptAIMessage = (message) => {
  const { aiResponse } = message;
  return aiResponse;
};
var valueChangeMessage = (options) => ({
  action: "plugin-changed",
  event: "update",
  ...options
});
var modalChangeMessage = (options) => ({
  action: "plugin-changed",
  event: "toggleModal",
  ...options
});
var pluginLoadedMessage = (options) => ({
  action: "plugin-changed",
  event: "loaded",
  fullHeight: true,
  subscribeState: true,
  ...options
});
var previewDimensionsChangeMessage = (options) => ({
  action: "plugin-changed",
  event: "previewDimension",
  ...options
});
var heightChangeMessage = (uid, height) => ({
  action: "plugin-changed",
  event: "heightChange",
  uid,
  height
});
var getContextMessage = (options) => ({
  action: "plugin-changed",
  event: "getContext",
  debounce: false,
  ...options
});
var getUserContextMessage = (options) => ({
  action: "plugin-changed",
  event: "getUserContext",
  ...options
});
var assetModalChangeMessage = (options) => ({
  action: "plugin-changed",
  event: "showAssetModal",
  ...options
});
var getPluginPromptAIMessage = (message, options) => ({
  action: "prompt-ai",
  event: "promptAI",
  ...options,
  promptAIPayload: { ...message }
});
var pluginUrlParamsFromUrl = (url) => {
  const searchParams = new URLSearchParams(url);
  const uid = searchParams.get("uid") ?? void 0;
  const protocol = searchParams.get("protocol") ?? void 0;
  const host = searchParams.get("host") ?? void 0;
  const preview = searchParams.get("preview") ?? void 0;
  if (protocol !== "http:" && protocol !== "https:") {
    return void 0;
  }
  if (typeof uid === "undefined" || typeof host === "undefined") {
    return void 0;
  }
  const secure = protocol === "https:";
  return {
    uid,
    secure,
    host,
    preview: typeof preview !== "undefined"
  };
};
var pluginStateFromStateChangeMessage = (message, validateContent) => {
  const validateResult = validateContent(message.model);
  if ("error" in validateResult && typeof validateResult.error === "string") {
    console.warn(
      `[Warning] The provided content is not valid, but it's still sent to the Visual Editor.`
    );
    console.warn(`  > ${validateResult.error}`);
  }
  return {
    interfaceLang: message.interfaceLanguage,
    spaceId: message.spaceId ?? void 0,
    userId: message.userId ?? void 0,
    story: message.story ?? void 0,
    storyId: message.storyId ?? void 0,
    storyLang: message.language === "" ? "default" : message.language,
    blockUid: message.blockId ?? void 0,
    token: message.token ?? void 0,
    options: recordFromFieldPluginOptions(message.schema.options),
    translatable: message.schema.translatable ?? false,
    isAIEnabled: message.isAIEnabled ?? false,
    uid: message.uid ?? void 0,
    content: validateResult.content,
    isModalOpen: message.isModalOpen,
    releases: message.releases,
    releaseId: message.releaseId
  };
};
var callbackQueue = () => {
  let callbackMap = {
    asset: {},
    context: {},
    userContext: {},
    stateChanged: {},
    loaded: {},
    promptAI: {},
    previewDimension: {}
  };
  const pushCallback = (callbackType, callback) => {
    const callbackId = getRandomUid();
    callbackMap = {
      ...callbackMap,
      [callbackType]: {
        ...callbackMap[callbackType],
        [callbackId]: callback
      }
    };
    return callbackId;
  };
  const popCallback = (callbackType, callbackId) => {
    if (typeof callbackId === "undefined") {
      return void 0;
    }
    const callback = callbackMap[callbackType][callbackId];
    const without = Object.entries(callbackMap[callbackType]).reduce(
      (previousValue, [id, callback2]) => {
        if (id === callbackId) {
          return previousValue;
        }
        previousValue[id] = callback2;
        return previousValue;
      },
      {}
    );
    callbackMap = {
      ...callbackMap,
      [callbackType]: without
    };
    return callback;
  };
  return {
    pushCallback,
    popCallback
  };
};
var createPluginActions = ({
  uid,
  postToContainer,
  onUpdateState,
  validateContent,
  enablePortalModal
}) => {
  const { pushCallback, popCallback } = callbackQueue();
  const onStateChange = (data) => {
    var _a;
    (_a = popCallback("stateChanged", data.callbackId)) == null ? void 0 : _a(data);
    onUpdateState(pluginStateFromStateChangeMessage(data, validateContent));
  };
  const onLoaded = (data) => {
    var _a;
    (_a = popCallback("loaded", data.callbackId)) == null ? void 0 : _a(data);
    onUpdateState(pluginStateFromStateChangeMessage(data, validateContent));
  };
  const onContextRequest = (data) => {
    var _a;
    (_a = popCallback("context", data.callbackId)) == null ? void 0 : _a(data);
  };
  const onUserContextRequest = (data) => {
    var _a;
    (_a = popCallback("userContext", data.callbackId)) == null ? void 0 : _a(data);
  };
  const onAssetSelect = (data) => {
    var _a;
    (_a = popCallback("asset", data.callbackId)) == null ? void 0 : _a(data);
  };
  const onPromptAI = (data) => {
    var _a;
    (_a = popCallback("promptAI", data.callbackId)) == null ? void 0 : _a(data);
  };
  const onPreviewDimension = (data) => {
    popCallback("previewDimension", data.callbackId);
  };
  const onUnknownMessage = (data) => {
    console.debug(
      `Plugin received a message from container of an unknown action type "${data.action}". You may need to upgrade the version of the @storyblok/field-plugin library. Full message: ${JSON.stringify(
        data
      )}`
    );
  };
  const messageCallbacks = {
    onStateChange,
    onLoaded,
    onContextRequest,
    onUserContextRequest,
    onAssetSelect,
    onPromptAI,
    onPreviewDimension,
    onUnknownMessage
  };
  const onHeightChange = (height) => {
    postToContainer(heightChangeMessage(uid, height));
  };
  const onKeydownEsc = () => {
    postToContainer(modalChangeMessage({ uid, status: false }));
  };
  return {
    actions: {
      setContent: (content) => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "stateChanged",
            (message) => resolve(
              pluginStateFromStateChangeMessage(message, validateContent)
            )
          );
          postToContainer(
            valueChangeMessage({ uid, callbackId, model: content })
          );
        });
      },
      setModalOpen: (isModalOpen, modalSize) => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "stateChanged",
            (message) => resolve(
              pluginStateFromStateChangeMessage(message, validateContent)
            )
          );
          postToContainer(
            modalChangeMessage({
              uid,
              callbackId,
              status: isModalOpen,
              modalSize
            })
          );
        });
      },
      selectAsset: () => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "asset",
            (message) => resolve(assetFromAssetSelectedMessage(message))
          );
          postToContainer(assetModalChangeMessage({ uid, callbackId }));
        });
      },
      requestContext: () => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "context",
            (message) => resolve(message.story)
          );
          postToContainer(getContextMessage({ uid, callbackId }));
        });
      },
      promptAI: (promptAIMessage) => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "promptAI",
            (message) => resolve(getResponseFromPromptAIMessage(message))
          );
          postToContainer(
            getPluginPromptAIMessage(promptAIMessage, { uid, callbackId })
          );
        });
      },
      requestUserContext: () => {
        return new Promise((resolve) => {
          const callbackId = pushCallback(
            "userContext",
            (message) => resolve(message.user)
          );
          postToContainer(getUserContextMessage({ uid, callbackId }));
        });
      },
      setPreviewDimension: (previewWidth) => {
        return new Promise((resolve) => {
          const callbackId = pushCallback("previewDimension", () => resolve());
          postToContainer(
            previewDimensionsChangeMessage({
              uid,
              callbackId,
              data: previewWidth
            })
          );
        });
      }
    },
    messageCallbacks,
    onHeightChange,
    onKeydownEsc,
    initialize: () => {
      return new Promise((resolve) => {
        const callbackId = pushCallback(
          "loaded",
          (message) => resolve(pluginStateFromStateChangeMessage(message, validateContent))
        );
        postToContainer(
          pluginLoadedMessage({ uid, callbackId, enablePortalModal })
        );
      });
    }
  };
};
var createHeightChangeListener = (onChange) => {
  const handleResize = () => {
    onChange(document.body.clientHeight);
  };
  const observer = new ResizeObserver(handleResize);
  observer.observe(document.body);
  return () => observer.disconnect();
};
var createKeydownEscListener = (onPressed) => {
  const handleEsc = (event) => {
    const key = event.key;
    if (key === "Escape") {
      onPressed();
    }
  };
  document.addEventListener("keydown", handleEsc);
  return () => document.removeEventListener("keydown", handleEsc);
};
var disableDefaultStoryblokStyles = () => {
  const link = document == null ? void 0 : document.querySelector(
    `link[href^="https://plugins.storyblok.com"]`
  );
  link == null ? void 0 : link.setAttribute("disabled", "");
  return () => {
    link == null ? void 0 : link.removeAttribute("disabled");
  };
};
var handlePluginMessage = (data, uid, callbacks) => {
  if (!isMessageToPlugin(data)) {
    return;
  }
  if (data.uid !== uid) {
    return;
  }
  if (isLoadedMessage(data)) {
    callbacks.onLoaded(data);
  } else if (isStateMessage(data)) {
    callbacks.onStateChange(data);
  } else if (isContextRequestMessage(data)) {
    callbacks.onContextRequest(data);
  } else if (isUserContextRequestMessage(data)) {
    callbacks.onUserContextRequest(data);
  } else if (isAssetSelectedMessage(data)) {
    callbacks.onAssetSelect(data);
  } else if (isPromptAIMessage(data)) {
    callbacks.onPromptAI(data);
  } else if (isPreviewDimensionResponse(data)) {
    callbacks.onPreviewDimension(data);
  } else {
    callbacks.onUnknownMessage(data);
  }
};
var createPluginMessageListener = (uid, origin, callbacks) => {
  const handleEvent = (event) => {
    if (event.origin === origin) {
      handlePluginMessage(event.data, uid, callbacks);
    }
  };
  window.addEventListener("message", handleEvent, false);
  return () => {
    window.removeEventListener("message", handleEvent, false);
  };
};
var sandboxBaseUrl = `https://plugin-sandbox.storyblok.com/field-plugin/`;
var sandboxUrl = () => {
  const sandboxQuery = new URLSearchParams({
    url: window.location.href
  }).toString();
  return `${sandboxBaseUrl}?${sandboxQuery}`;
};
var createFieldPlugin = ({
  onUpdateState,
  validateContent,
  targetOrigin,
  enablePortalModal
}) => {
  const isEmbedded = window.parent !== window;
  if (!isEmbedded) {
    onUpdateState({
      type: "error",
      error: new Error(
        `The window is not embedded within another window. Did you mean to open the field plugin in the sandbox? ${sandboxUrl()}`
      )
    });
    return () => void 0;
  }
  const params = pluginUrlParamsFromUrl(window.location.search);
  if (!params) {
    onUpdateState({
      type: "error",
      error: new Error(
        `The URL parameters does not match the expected format.`
      )
    });
    return () => void 0;
  }
  const { uid, host } = params;
  const origin = typeof targetOrigin === "string" ? targetOrigin : host === "plugin-sandbox.storyblok.com" ? "https://plugin-sandbox.storyblok.com" : "https://app.storyblok.com";
  const postToContainer = (message) => {
    try {
      window.parent.postMessage(message, origin);
    } catch (err) {
      if (isCloneable(message)) {
        throw err;
      }
      throw new Error(
        "The argument could not be cloned. The argument must be cloneable with structuredClone(), so that it can be sent to other windows with window.postMessage(). Does your object contain functions, getters, setters, proxies, or any other value that is not cloneable? Did you try to pass a reactive object? For a full description on the structuredClone algorithm, see: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm",
        {
          cause: err
        }
      );
    }
  };
  const cleanupStyleSideEffects = disableDefaultStoryblokStyles();
  const {
    actions,
    messageCallbacks,
    onHeightChange,
    onKeydownEsc,
    initialize
  } = createPluginActions({
    uid,
    postToContainer,
    onUpdateState: (data) => {
      onUpdateState({
        type: "loaded",
        data,
        actions
      });
    },
    validateContent: validateContent || ((content) => ({ content })),
    enablePortalModal
  });
  const cleanupHeightChangeListener = createHeightChangeListener(onHeightChange);
  const cleanupKeydownEscListener = createKeydownEscListener(onKeydownEsc);
  const cleanupMessageListenerSideEffects = createPluginMessageListener(
    params.uid,
    origin,
    messageCallbacks
  );
  void initialize();
  return () => {
    cleanupMessageListenerSideEffects();
    cleanupHeightChangeListener();
    cleanupKeydownEscListener();
    cleanupStyleSideEffects();
  };
};

// node_modules/@storyblok/field-plugin/dist/react/index.mjs
var import_react = __toESM(require_react(), 1);
var useFieldPlugin = (options = {}) => {
  const [plugin, setPlugin] = (0, import_react.useState)({
    type: "loading"
  });
  (0, import_react.useEffect)(
    () => createFieldPlugin({
      ...options,
      onUpdateState: (state) => {
        if (state.type === "error") {
          setPlugin({
            type: "error",
            error: state.error
          });
        } else if (state.type === "loaded") {
          setPlugin({
            type: "loaded",
            data: state.data,
            actions: state.actions
          });
        }
      }
    }),
    []
  );
  return plugin;
};
export {
  useFieldPlugin
};
//# sourceMappingURL=@storyblok_field-plugin_react.js.map
