import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {log} from "node:util";

interface IFormProps {
    userId: number,
    id: number,
    title: string,
    body: string
}


const FormComponent = () => {
    let formObj = useForm<IFormProps>
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = formObj({mode: 'all', resolver: joiResolver(postValidator)})


    const save = ({userId, id, title, body}: IFormProps) => {
        // console.log(formValues)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                id: id,
                title: title,
                body: body
            })
        }).then(value => value.json())
            .then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type='number' {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>

                <input type='number' {...register('id')}/>
                {errors.id && <span>{errors.id.message}</span>}
                <br/>

                <input type='text' {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>

                <input type='text' {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>

                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;