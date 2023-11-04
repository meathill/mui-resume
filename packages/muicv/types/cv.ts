export interface KeyInfo {
  fullName: string;
  email: string;
  phone: string;
  title: string;
  wechat: string;
  location: string;
}

export interface ProjectExperience {
  _id: string;
  name: string; // 项目名称
  description: string; // 项目描述
  role: string; // 个人在项目中的角色
  link: string; // 项目链接
  images: string[]; // 项目截图
  techStack: string[]; // 项目技术栈
  startDate: string; // 项目开始时间
  endDate: string; // 项目结束时间
  visible: boolean;
  isEditing: boolean;
}

export interface Resume {
  keyInfo: KeyInfo;
  projectExperiences: ProjectExperience[],
}

export type MyProfile = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  title: string;
  wechat: string;
};
