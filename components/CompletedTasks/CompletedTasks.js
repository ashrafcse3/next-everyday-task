import { Card, Dropdown, Button } from "flowbite-react";

const CompletedTasks = () => {
    return (
        <Card href="#">
            <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Completed Task 1
                </h5>
                <Dropdown
                    dismissOnClick={false}
                >
                    <Dropdown.Item>
                        Add a comment
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Delete
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <Button size="xs">
                Not completed
            </Button>
        </Card>
    );
};

export default CompletedTasks;