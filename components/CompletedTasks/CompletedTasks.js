import { Card, Dropdown, Button } from "flowbite-react";
import { toast } from "react-hot-toast";

const CompletedTasks = ({ task: { _id, task, optional_image_sm }, index, refetch }) => {
    const reduceTaskWords = () => {
        const splittedTask = task.split(" ");
        // join only 4 first words and then ...
        if (splittedTask.length < 4) {
            return splittedTask.join(' ');
        }
        else {
            const firstFewWords = splittedTask.slice(0, 4).join(' ');
            return `${firstFewWords} ....`;
        }
    }

    const handleNotCompleted = _id => {
        fetch(`http://localhost:4000/maketaskuncomplete/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`Task ${index} marked as not completed`);
                    refetch();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <Card>
            <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Completed Task {index}
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
            <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {
                        reduceTaskWords()
                    }
                </p>
                {
                    optional_image_sm ?
                        <img className="h-10 w-10" src={optional_image_sm} alt="" />
                        : ''
                }
            </div>
            <Button size="xs" onClick={() => handleNotCompleted(_id)}>
                Make not completed
            </Button>
        </Card>
    );
};

export default CompletedTasks;