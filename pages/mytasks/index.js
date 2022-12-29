import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import MyTask from "../../components/MyTasks/MyTask";
import PageHeader from "../../components/shared/PageHeader";
import PageLoader from "../../components/shared/PageLoader";

const index = () => {
    const { data: tasks, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('http://localhost:4000/noncompletedtasks');
            return response.json();
        }
    });

    if (!tasks) return <PageLoader />;

    // console.log(tasks);
    return (
        <div>
            <Head>
                <title>My tasks | E T</title>
            </Head>
            <PageHeader title="Your tasks" />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-2 sm:px-4">
                {
                    tasks &&
                    tasks.map((task, index) => <MyTask
                        key={task._id}
                        task={task}
                        refetch={refetch}
                        index={index + 1}
                    />)
                }
            </div>
        </div>
    );
};

export default index;