import { Card, Dropdown, Button } from "flowbite-react";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { handleDeleteTask } from "../shared/js_functions/handleDeleteTask";
import { reduceTaskWords } from "../shared/js_functions/reduceTaskWords";

const MyTask = ({ task: { _id, task, optional_image_sm }, index, refetch }) => {
    const { user } = useContext(AuthContext);

    const handleCompleteTask = _id => {
        fetch(`https://everyday-task-server-ashrafcse3.vercel.app/maketaskcomplete/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`Task ${index} marked as  completed`);
                    refetch();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <Card className="h-44">
            <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Task {index}
                </h5>
                {
                    user?.uid ?
                        <Dropdown
                            dismissOnClick={true}
                        >
                            <Link href={`/updatetask/${_id}`}>
                                <Dropdown.Item>
                                    Update
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Item onClick={() => handleDeleteTask(_id, refetch)}>
                                Delete
                            </Dropdown.Item>
                        </Dropdown>
                        : ''
                }
            </div>
            <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {
                        reduceTaskWords(task, _id)
                    }
                </p>
                {
                    optional_image_sm ?
                        <img className="h-10 w-10" src={optional_image_sm} alt="" />
                        : ''
                }
            </div>
            {
                user?.uid ?
                    <Button size="xs" onClick={() => handleCompleteTask(_id)}>
                        Complete this task
                    </Button>
                    :
                    <div className="font-normal text-gray-500 dark:text-gray-400">
                        (<Link href="/login" className="text-blue-700 dark:text-white">Login </Link>
                        to see more options)
                    </div>
            }
        </Card>
    );
};

export default MyTask;