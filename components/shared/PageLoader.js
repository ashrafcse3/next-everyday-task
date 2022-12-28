import { Spinner } from "flowbite-react";

const PageLoader = () => {
    return (
        <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    );
};

export default PageLoader;