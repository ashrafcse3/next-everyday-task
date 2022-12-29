import Link from "next/link";

export const reduceTaskWords = (task, _id) => {
    const splittedTask = task.split(" ");
    // join only 4 first words and then ...
    if (splittedTask.length < 4) {
        return (<>
            {splittedTask.join(' ')}
            <Link href={`/taskdetails/${_id}`} className="text-blue-500 dark:text-gray-200"> (Add a comment)</Link>
        </>);
    }
    else {
        const firstFewWords = splittedTask.slice(0, 4).join(' ');
        const taskWithLink = <>
            {firstFewWords}...
            <Link href={`/taskdetails/${_id}`} className="text-blue-500 dark:text-gray-200"> see details</Link>
        </>
        return taskWithLink;
    }
}