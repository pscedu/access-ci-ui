import { useJSON } from "./utils";

import Icon from "./icon";

export default function ResourceGroupDescription({ baseUri, infoGroupId }) {
  const data = useJSON(
    `${baseUri}/api/resource-groups/${infoGroupId}.json`,
    null
  );
  if (!data) return;
  const { name, resourceProvider, imageUri, description, userGuideUri } = data;
  return (
    <div class="resource-group-description">
      {imageUri ? (
        <img class="resource-group-feature-image" src={imageUri} />
      ) : null}
      <h1>{name}</h1>
      {resourceProvider ? (
        <p>
          <a
            href={`/resource-providers/${resourceProvider.resourceProviderId}`}
          >
            {resourceProvider.iconUri ? (
              <Icon
                alt={resourceProvider.name}
                src={resourceProvider.iconUri}
              />
            ) : null}
            {resourceProvider.name}
          </a>
        </p>
      ) : null}
      {description ? <p>{description}</p> : null}
      <a href="#" class="btn secondary lg">
        <Icon name="check2-circle" /> Get Started with {name}
      </a>
      {userGuideUri ? (
        <a href={userGuideUri} class="btn lg">
          <Icon name="book" /> User Guide
        </a>
      ) : null}
    </div>
  );
}