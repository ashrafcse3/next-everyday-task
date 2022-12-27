import MyTask from "../../components/MyTasks/MyTask";
import PageHeader from "../../components/shared/PageHeader";

const index = () => {
    return (
        <div>
            <PageHeader title="Your tasks" />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-2 sm:px-4">
                <MyTask />
                <MyTask />
                <MyTask />
            </div>
        </div>
    );
};

export default index;