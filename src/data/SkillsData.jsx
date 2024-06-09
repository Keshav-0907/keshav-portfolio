const SkillDataR1 = [
    {
        id: 1,
        title: 'JavaScript',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929069/icon-javscript_duiu8g.png'
    },
    {
        i:2,
        title: 'TypeScript',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929070/icon-typescript_jrvodn.png'
    },
    {
        id:3, 
        title: 'React',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929070/icon-react_cvvkgz.png'
    },
    {
        id:4,
        title: 'NextJS',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929069/icon-nextjs_pcx1q6.png'
    },
    {
        id:5,
        title: 'NodeJS',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929069/icon-nodejs_phqoz5.png'
    },
    {
        id:6,
        title: 'ExpressJS',
        url: 'https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png'
    },
    {
        id:7,
        title: 'Docker',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704929069/icon-socket_g8ckth.png'
    },

]

const SkillDataR2 =[
    {
        id: 1,
        title: 'MongoDB',
        url: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg'
    }, {
        id: 2,
        title: 'MYSql',
        url: 'data:image/png;base64,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'
    }, {
        id: 3,
        titl3: 'Saas',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704931179/icon-sass_phxhgd.png'
    }, {
        id: 4,
        title: 'Tailwind',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704931179/icon-tailwindcss_lvehhw.png'
    }, {
        id: 5,
        title: 'Figma',
        url: 'https://s3-alpha.figma.com/hub/file/2815952264/7a5ebfb0-0508-48ab-be9a-31b36ba53f97-cover.png'
    }, {
        id: 6,
        title: 'Firebase',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704931179/icon-storybook-1_kgyu6z.png'
    }, {
        id: 7,
        title: 'Git',
        url: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1704931178/icon-git_em7kul.png'
    },
    
]
export {SkillDataR1, SkillDataR2}