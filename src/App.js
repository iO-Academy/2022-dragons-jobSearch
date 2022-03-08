import './normalize.css'
import './App.scss';
import JobResultTable from "./JobResultTable/JobResultTable";

const testTable = [
    {
        "id": "300",
        "job_title": "Junior software engineer",
        "company": "Demivee",
        "logo": "https://dummyimage.com/250/000000/89e632&text=Logo",
        "salary": "127228",
        "type": null,
        "skills": [
            {
                "id": "5",
                "skill": "Ruby"
            },
            {
                "id": "8",
                "skill": "Python"
            },
            {
                "id": "18",
                "skill": "XML"
            }
        ]
    },
    {
        "id": "760",
        "job_title": "Software developer",
        "company": "Flashspan",
        "logo": "https://dummyimage.com/250/e330d1/ffffff&text=Logo",
        "salary": "108612",
        "type": null,
        "skills": [
            {
                "id": "6",
                "skill": "Yii"
            },
            {
                "id": "16",
                "skill": "TypeScript"
            },
            {
                "id": "17",
                "skill": "Docker"
            }
        ]
    },
    {
        "id": "976",
        "job_title": "Software developer",
        "company": "Realfire",
        "logo": "https://dummyimage.com/250/eb4034/000000&text=Logo",
        "salary": "121091",
        "type": "Full time",
        "skills": [
            {
                "id": "1",
                "skill": "PHP"
            },
            {
                "id": "2",
                "skill": "JavaScript"
            }
        ]
    },
    {
        "id": "439",
        "job_title": "Junior software engineer",
        "company": "Yata",
        "logo": "https://dummyimage.com/250/000000/d91c4e&text=Logo",
        "salary": "129291",
        "type": null,
        "skills": [
            {
                "id": "2",
                "skill": "JavaScript"
            },
            {
                "id": "4",
                "skill": "Java"
            }
        ]
    },
    {
        "id": "173",
        "job_title": "Junior software developer",
        "company": "Tagchat",
        "logo": "https://dummyimage.com/250/d91c4e/ffffff&text=Logo",
        "salary": "108038",
        "type": "Part time",
        "skills": [
            {
                "id": "16",
                "skill": "TypeScript"
            }
        ]
    },
    {
        "id": "509",
        "job_title": "Junior web developer",
        "company": "Talane",
        "logo": "https://dummyimage.com/250/eb4034/ffffff&text=Logo",
        "salary": null,
        "type": null,
        "skills": []
    },
    {
        "id": "802",
        "job_title": "Software developer",
        "company": "Oyope",
        "logo": "https://dummyimage.com/250/000000/d91c4e&text=Logo",
        "salary": "67197",
        "type": "Contract",
        "skills": []
    },
    {
        "id": "741",
        "job_title": "Junior web developer",
        "company": "Jabberbean",
        "logo": "https://dummyimage.com/250/ffffff/e330d1&text=Logo",
        "salary": null,
        "type": null,
        "skills": [
            {
                "id": "3",
                "skill": "React"
            },
            {
                "id": "10",
                "skill": "HTML/CSS"
            },
            {
                "id": "13",
                "skill": "Vue"
            },
            {
                "id": "15",
                "skill": "Sass"
            },
            {
                "id": "18",
                "skill": "XML"
            }
        ]
    },
    {
        "id": "640",
        "job_title": "Junior web developer",
        "company": "Realcube",
        "logo": "https://dummyimage.com/250/e330d1/ffffff&text=Logo",
        "salary": "84636",
        "type": null,
        "skills": [
            {
                "id": "10",
                "skill": "HTML/CSS"
            },
            {
                "id": "18",
                "skill": "XML"
            }
        ]
    },
    {
        "id": "578",
        "job_title": "Junior web developer",
        "company": "Centidel",
        "logo": "https://dummyimage.com/250/eb4034/ffffff&text=Logo",
        "salary": "82624",
        "type": null,
        "skills": [
            {
                "id": "7",
                "skill": "Laravel"
            },
            {
                "id": "17",
                "skill": "Docker"
            }
        ]
    }
]
// import SkillTag from "./SkillTag/SkillTag";
// import RecentJobs from "./RecentJobs/recentJobs";
// import Title from "./Title/Title";
// import ContractTypeTag from "./ContractType/contractType";

function App() {
    const recentJobs = "Most recent jobs"
    const skillTag = 'MySql'
    return (
        <>
            <JobResultTable testTable={testTable}/>
            {/*<Title recentJobs={recentJobs}/>*/}
            {/*<RecentJobs/>*/}
            {/*<SkillTag skillTag={skillTag} />*/}
            {/*<ContractTypeTag contractType={'Full Time'}/>*/}
        </>
    )
}

export default App;

