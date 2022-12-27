import CompletedTasks from "../../components/CompletedTasks/CompletedTasks";

const index = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-2 sm:px-4">
                <CompletedTasks />
                <CompletedTasks />
                <CompletedTasks />
            </div>
        </div>
    );
};

export default index;