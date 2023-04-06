import Project, { ProjectItemTypes } from "~templates/Project"
import { useMemo, useState } from "react";
import LightBoxBase, { LightBoxImageType } from "~organisms/LightBoxBase";
import { projectDummy } from "~assets/dataDummy/projectDummy";

interface ProjectContainerProps {
  onShowMoreClick: () => void;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({onShowMoreClick}) => {
  const [galleryImages, setGalleryImages] = useState<LightBoxImageType[] | undefined>();
  const [showFull, setShowFull] = useState<boolean>(false);

  const convertedProjectData = useMemo<ProjectItemTypes[]>(() => {
    if(showFull) return projectDummy;

    return projectDummy.slice(0, 2);
  }, [projectDummy, showFull])

  const handleClickProject = (projectIndex: number, itemIndex: number) => {
    const selectedProject = convertedProjectData[projectIndex];
    if(selectedProject){
      const htmlDom = document.querySelector('html');
      htmlDom?.setAttribute('style', 'overflow: hidden');
      const cloneImgList = [...selectedProject.imgSrcList];
      const selectedImg = cloneImgList.splice(1, itemIndex);
      setGalleryImages([...selectedImg, ...cloneImgList].map(value => ({
        src: value, alt: ''
      })))
    }
  }
  const handleLightBoxClose = () => {
    const htmlDom = document.querySelector('html');
      htmlDom?.setAttribute('style', 'overflow: auto')
      setGalleryImages(undefined);
  }

  const handleShowMoreClick = () => {
    setShowFull(preState => !preState);
    onShowMoreClick();
  }

  return (
    <>
      <Project 
        projectList={convertedProjectData}
        onProjectImageClick={handleClickProject}
        onShowMoreClick={handleShowMoreClick}
        isShowFull={showFull}
      />
      <LightBoxBase 
        open={Boolean(galleryImages)}
        slides={galleryImages ?? []}
        onClose={handleLightBoxClose}
      />
    </>
  )
}

export default ProjectContainer