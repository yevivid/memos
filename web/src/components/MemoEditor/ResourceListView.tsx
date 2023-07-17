import { LinearProgress } from "@mui/joy";
import Icon from "../Icon";
import ResourceIcon from "../ResourceIcon";
import React from "react";

interface Props {
  resourceList: Resource[];
  setResourceList: (resourceList: Resource[]) => void;
  progressList: number[];
}

const ResourceListView = (props: Props) => {
  const { resourceList, setResourceList, progressList } = props;

  const handleDeleteResource = async (resourceId: ResourceId) => {
    setResourceList(resourceList.filter((resource) => resource.id !== resourceId));
  };

  return (
    <>
      {resourceList.length > 0 && (
        <div className="w-full flex flex-row justify-start flex-wrap gap-2 mt-2">
          {resourceList.map((resource, index) => {
            const progress = progressList[index] || 0;
            return (
              <div
                key={resource.id}
                className="max-w-full flex flex-row justify-start items-center flex-nowrap bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-gray-500"
              >
                <ResourceIcon resource={resource} className="w-4 h-auto mr-1" />
                <span className="text-sm max-w-xs truncate">{resource.filename}</span>
                <Icon.X className="w-4 h-auto ml-1 cursor-pointer hover:opacity-80" onClick={() => handleDeleteResource(resource.id)} />
                <LinearProgress determinate value={progress} size="lg" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ResourceListView;
