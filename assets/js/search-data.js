// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "if you need any of these publications (or their data) just send me an email",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-calmr",
          title: "calmr",
          description: "canonical associative learning models in R",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calmr/";
          },
        },{id: "post-calmr-app-update",
        
          title: "calmr.app update",
        
        description: "a new coat of (bslib) paint",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/calmr-app-refactor/";
          
        },
      },{id: "post-calmr-refactor",
        
          title: "calmr refactor",
        
        description: "a calmr calmr",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/calmr-refactor/";
          
        },
      },{id: "post-gganimate",
        
          title: "gganimate",
        
        description: "poor-man&#39;s manim",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/animation-super-simple/";
          
        },
      },{id: "post-new-year-new-me",
        
          title: "new year new me",
        
        description: "starting anew",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/new-year-new-me/";
          
        },
      },{id: "post-mentimeter",
        
          title: "mentimeter",
        
        description: "a double-edged tool",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mentimeter/";
          
        },
      },{id: "post-calmr-package",
        
          title: "calmr package",
        
        description: "canonical associative learning models in R",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/calmr/";
          
        },
      },{id: "post-a-heidi-demo",
        
          title: "a HeiDI demo",
        
        description: "abuelito dime tu",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/heidi/";
          
        },
      },{id: "post-creating-cancer",
        
          title: "creating cancer",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/cancer_dcgan/";
          
        },
      },{id: "post-on-fast-and-slow-errors",
        
          title: "on fast and slow errors",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/slow-errors/";
          
        },
      },{id: "post-every-paper-is-an-iceberg",
        
          title: "every paper is an iceberg",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/iceberg/";
          
        },
      },{id: "post-zeus",
        
          title: "zeus",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/code-snippets/";
          
        },
      },{id: "post-keeping-pigeons-close-to-our-hearts",
        
          title: "keeping pigeons close to our hearts",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/keep-pigeons-close/";
          
        },
      },{id: "post-have-a-computer-program-an-experiment",
        
          title: "have a computer? program an experiment",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/minimal-setup/";
          
        },
      },{id: "post-cemc-simulator-repository-available-at-github",
        
          title: "CEMC simulator repository available at github",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/first-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-a-post-cardiff-university-collaborating-with-professors-rob-honey-and-dom-dwyer",
          title: 'Started a post @ Cardiff University collaborating with Professors Rob Honey and Dom...',
          description: "",
          section: "News",},{id: "news-started-my-fellowship-cardiff-university-developing-gan-tools-for-cognitive-science",
          title: 'Started my Fellowship @ Cardiff University, developing GAN tools for Cognitive Science!',
          description: "",
          section: "News",},{id: "news-my-first-phd-student-began-her-studentship-best-of-luck-magda",
          title: 'My first PhD student began her studentship. Best of luck, Magda!',
          description: "",
          section: "News",},{id: "news-we-published-a-novel-account-of-delusions-inspired-by-hybrid-predictive-coding-lancet-psychiatry",
          title: 'We published a novel account of delusions inspired by hybrid predictive coding @...',
          description: "",
          section: "News",},{id: "news-our-work-on-a-rodent-model-of-blast-mediated-traumatic-brain-injury-and-its-cognitive-sequelae-was-accepted-for-publication-in-heliyon",
          title: 'Our work on a rodent model of blast-mediated traumatic brain injury, and its...',
          description: "",
          section: "News",},{id: "news-my-r-package-calmr-is-now-on-cran",
          title: 'My R package calmr is now on CRAN',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/calmr_published/";
            },},{id: "news-our-work-applying-heidi-to-the-acquisition-and-extinction-of-autoshaping-in-rats-was-accepted-for-publication-in-nlm",
          title: 'Our work applying HeiDI to the acquisition and extinction of autoshaping in rats...',
          description: "",
          section: "News",},{id: "news-our-recent-work-replicating-findings-in-backward-conditioning-of-autoshaping-in-rats-as-well-as-a-mysterious-second-order-conditioning-finding-was-recently-published-in-jep-alc",
          title: 'Our recent work replicating findings in backward conditioning of autoshaping in rats (as...',
          description: "",
          section: "News",},{id: "news-a-couple-of-follow-up-studies-on-associative-symmetry-were-recently-accepted-for-publication-in-jeab",
          title: 'A couple of follow up studies on associative symmetry were recently accepted for...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
