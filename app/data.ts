type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type RelevantExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: '3D Object reconstruction with RL',
description: 
    `
    RL-based Next-best-view planner for a 6-DOF robotic arm. This was part of my [Bachelor's thesis](https://www.ram.eemcs.utwente.nl/index.php/education/assignments/next-best-view-planner-6-dof-robotic-arm-using-deep-reinforcement-learning-3d) at RaM, University of Twente
    `,
    link: '/blog/project_nbv',
    video:
      'https://files.catbox.moe/pk2oxq.mov',
    id: 'project1',
  },
]

export const RELEVANT_EXPERIENCE: RelevantExperience[] = [
  {
    company: 'RoboTeamTwente',
    title: 'Software Engineer & Technical Manager',
    start: '2024',
    end: '2025',
    link: 'https://roboteamtwente.nl',
    id: 'roboteam',
  },
]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/flimdejong',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/flimdejong/',
  },
    {
    label: 'Huggingface',
    link: 'https://huggingface.co/Flimdejong',
  },
]

export const EMAIL = 'flimdejong@email.com'
