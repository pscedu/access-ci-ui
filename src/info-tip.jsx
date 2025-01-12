import { useLayoutEffect, useRef } from "preact/hooks";
import tippy from "tippy.js";

import Icon from "./icon";

export default function InfoTip({
  color = "var(--contrast-6)",
  icon = "info-circle-fill",
  tooltip,
}) {
  const trigger = useRef(null);
  useLayoutEffect(() => {
    if (trigger.current)
      tippy(trigger.current, {
        content: tooltip,
        theme: "access",
        appendTo: trigger.current.parentElement,
      });
  }, [trigger.current]);

  return (
    <button class="info-tip" style={{ color }} ref={trigger}>
      <Icon name={icon} />
    </button>
  );
}
