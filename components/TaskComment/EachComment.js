import { Button, Card } from "flowbite-react";
import { TrashIcon } from '@heroicons/react/24/solid'

const EachComment = ({ comment, index, handleCommentDelete, deleteButtonLoading }) => {
    return (
        <Card>
            <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Comment no {index}
                </h5>
                <Button onClick={() => handleCommentDelete(comment._id)} color="failure">
                    {deleteButtonLoading}
                    <TrashIcon className="h-5 w-5 mr-2" />
                    Delete
                </Button>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {comment.comment}
            </p>
        </Card>
    );
};

export default EachComment;