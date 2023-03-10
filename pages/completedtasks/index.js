import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import CompletedTasks from "../../components/CompletedTasks/CompletedTasks";
import PageHeader from "../../components/shared/PageHeader";
import PageLoader from "../../components/shared/PageLoader";

const index = () => {
    const { data: tasks, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const response = await fetch('https://everyday-task-server-ashrafcse3.vercel.app/completedtasks');
            return response.json();
        }
    });

    if (!tasks) return <PageLoader />;

    return (
        <div>
            <Head>
                <title>Completed tasks | E T</title>
            </Head>
            <PageHeader title='Your completed tasks' />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-2 sm:px-4">
                {
                    tasks &&
                    tasks.map((task, index) => <CompletedTasks
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