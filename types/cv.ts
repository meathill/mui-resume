export interface ProjectExperience {
  _id: string;
  name: string; // 项目名称
  description: string; // 项目描述
  link: string; // 项目链接
  images: string[]; // 项目截图
  tags: string[]; // 项目标签
  highlights: string[]; // 项目亮点
  techStack: string[]; // 项目技术栈
  testimony: Testimony[]; // 项目评价
  startDate: string; // 项目开始时间
  endDate: string; // 项目结束时间
  visible: boolean;
}

export interface Testimony {
  content: string; // 评价内容
  title: string; // 评价者头衔
  name: string; // 评价者姓名
  avatar: string; // 评价者头像
  link: string; // 评价者链接
}
