import Head from "next/head";
import PageHeader from "../../components/shared/PageHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageLoader from "next/dist/client/page-loader";
import TaskDetails from "../../components/TaskDetails/TaskDetails";
import TaskComment from "../../components/TaskComment/TaskComment";

const taskdetails = ({ task: { _id }, task }) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const router = useRouter();

    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4">
            <Head>
                <title>Update task | E T</title>
            </Head>
            <PageHeader title='Task details' />
            <main>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <TaskDetails task={task} />
                    <TaskComment taskId={_id} />
                    {/* <div className="flex justify-center items-center">
                        Comments will be here<br />
                        Coming soon...
                    </div> */}
                </div>
            </main >
        </div >
    );
};

export default taskdetails;

export async function getServerSideProps(context) {
    const taskid = context.query.taskid;
    // fetch the task details with comment
    const task = await fetch(`https://everyday-task-server-ashrafcse3.vercel.app/task/${taskid}`).then(res => res.json());
    console.log(task);
    return {
        props: {
            task,
        }
    }
}