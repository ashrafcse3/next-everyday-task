import { Button, Label, Spinner, Textarea } from 'flowbite-react';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import PageLoader from '../shared/PageLoader';
import EachComment from './EachComment';

const TaskComment = ({ taskId }) => {
    const [addBtnLoading, setAddBtnLoading] = useState(false);
    const [deleteBtnLoading, setDeleteBtnLoading] = useState(false);
    const [textAreaRow, setTextAreaRow] = useState(1);
    const { register, handleSubmit, reset } = useForm();

    const { data: comments, refetch, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const response = await fetch(`https://everyday-task-server-ashrafcse3.vercel.app/comments/${taskId}`);
            return response.json();
        }
    });

    if (isLoading) {
        return <PageLoader />;
    }

    const onSubmit = data => {
        setAddBtnLoading(true);

        let dataObject = {
            comment: data.your_comment,
            task_id: taskId
        };

        saveCommentToDB(dataObject);

        // console.log('dataObject', dataObject);
    };

    const handleKeyDown = event => {
        const commentText = document.getElementById('comment');

        if (event.key === 'Enter' && event.ctrlKey) {
            console.log('ctrl+enter btn clicked');
            // to add a new row
            setTextAreaRow(textAreaRow + 1);
            // to add a new line
            commentText.value = `${commentText.value} \n`
        }
        else if (event.key === 'Enter') {
            console.log('enter btn clicked');
            setAddBtnLoading(true);

            let dataObject = {
                comment: commentText.value,
                task_id: taskId
            };

            saveCommentToDB(dataObject);
        }
    }

    const saveCommentToDB = preparedData => {
        // post the data into database
        fetch('https://everyday-task-server-ashrafcse3.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(preparedData)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                // set the btn loading false after data loaded
                toast.success('Comment added successfully');
                setAddBtnLoading(false);
                refetch();
                // reset the form comment value
                reset({ your_comment: '' })
            });
    }

    const handleCommentDelete = commentId => {
        setDeleteBtnLoading(true);
        // delete the comment with the received commentId
        fetch(`https://everyday-task-server-ashrafcse3.vercel.app/comments/${commentId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Comment deleted');
                    setDeleteBtnLoading(false);
                    refetch();
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    const buttonLoadingCode = (
        <div className="mr-3">
            <Spinner
                size="sm"
                light={true}
            />
        </div>
    );

    const addButtonLoading = (
        addBtnLoading ?
            buttonLoadingCode
            :
            ''
    );

    const deleteButtonLoading = (
        deleteBtnLoading ?
            buttonLoadingCode
            :
            ''
    );

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Comment"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Write your Comment"
                        rows={textAreaRow}
                        required={true}
                        onKeyDown={handleKeyDown}
                        {...register('your_comment')}
                    />
                    <p className='font-light text-sm text-gray-500 dark:text-gray-600 text-center'>(Press enter to save the comment || Press ctrl+Enter to add a new line)</p>
                </div>
                <Button type="submit">
                    {addButtonLoading}
                    Add
                </Button>
            </form>
            <div className='grid my-3 gap-3'>
                {
                    comments &&
                    comments.map((comment, index) => <EachComment
                        key={index}
                        index={index + 1}
                        comment={comment}
                        handleCommentDelete={handleCommentDelete}
                        deleteButtonLoading={deleteButtonLoading}
                    />)
                }
            </div>
        </div>
    );
};

export default TaskComment;