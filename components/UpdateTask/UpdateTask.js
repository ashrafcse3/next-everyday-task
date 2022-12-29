import { Card, Dropdown, Button } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { handleDeleteTask } from "../shared/js_functions/handleDeleteTask";
import { reduceTaskWords } from "../shared/js_functions/reduceTaskWords";

const UpdateTask = ({ task: { _id, task, optional_image_lg, task_completed } }) => {

    // const [isTaskCompleted, setIsTaskCompleted] = useState(task_completed);

    // const handleCompleteTask = _id => {
    //     console.log('handleCompleteTask', isTaskCompleted);
    //     setIsTaskCompleted(!isTaskCompleted);
    //     console.log('after handleCompleteTask', isTaskCompleted);
    //     // fetch(`http://localhost:4000/maketaskcomplete/${_id}`, {
    //     //     method: 'PUT',
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     },
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data);
    //     //         if (data.modifiedCount > 0) {
    //     //             toast.success(`Task marked as  completed`);
    //     //             setIsTaskCompleted(!task_completed);
    //     //         }
    //     //     })
    //     //     .catch(error => console.error(error));
    // }

    // const handleNotCompleted = _id => {
    //     console.log('handleNotCompleted');
    //     // fetch(`http://localhost:4000/maketaskuncomplete/${_id}`, {
    //     //     method: 'PUT',
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     }
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data);
    //     //         if (data.modifiedCount > 0) {
    //     //             toast.success(`Task marked as not completed`);
    //     //             setIsTaskCompleted(!task_completed);
    //     //         }
    //     //     })
    //     //     .catch(error => console.error(error));
    // }

    return (
        <Card className="">
            <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Task details
                </h5>
                <Dropdown
                    dismissOnClick={true}
                >
                    <Link href={`/updatetask/${_id}`}>
                        <Dropdown.Item>
                            Update
                        </Dropdown.Item>
                    </Link>
                    <Dropdown.Item onClick={() => handleDeleteTask(_id)}>
                        Delete
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {task}
            </p>
            {
                optional_image_lg ?
                    <img className="" src={optional_image_lg} alt="" />
                    : ''
            }
            {/* {
                isTaskCompleted ?
                    <Button size="xs" onClick={() => handleNotCompleted(_id)}>
                        Make not completed
                    </Button>
                    :
                    <Button size="xs" onClick={() => handleCompleteTask(_id)}>
                        Complete this task
                    </Button>
            } */}
        </Card>
    );
};

export default UpdateTask;