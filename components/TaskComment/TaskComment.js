import { Button, Label, Textarea } from 'flowbite-react';
import React from 'react';

const TaskComment = () => {
    const { register, handleSubmit } = useForm();
    const [btnLoading, setBtnLoading] = useState(false);

    const onSubmit = data => {
        setBtnLoading(true);

        let dataObject = {
            comment: data.your_comment,
        };

        saveCommentToDB(dataObject);

        console.log('dataObject', dataObject);
    };

    const saveCommentToDB = preparedData => {
        // post the data into database
        fetch('http://localhost:4000/comments', {
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
                setBtnLoading(false);
            });
    }

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
                        rows={4}
                        required={true}
                        {...register('your_comment')}
                    />
                </div>
                <Button type="submit">
                    {
                        btnLoading ?
                            <div className="mr-3">
                                <Spinner
                                    size="sm"
                                    light={true}
                                />
                            </div>
                            :
                            ''
                    }
                    Add
                </Button>
            </form>
        </div>
    );
};

export default TaskComment;