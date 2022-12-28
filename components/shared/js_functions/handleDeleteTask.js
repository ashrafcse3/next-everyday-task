import { toast } from "react-hot-toast";

export const handleDeleteTask = (_id, refetch) => {
    fetch(`https://everyday-task-server-ashrafcse3.vercel.app/task/${_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Task deleted successfully');
            refetch();
        })
        .catch(error => {
            console.error(error);
        })
}