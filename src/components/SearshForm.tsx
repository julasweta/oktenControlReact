import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks/hooks";
import { moviesActions } from "../redux/slices";

const SearshForm: React.FC = () =>
{
    type FormValues = {
        search: string;
    };


    const { register, watch, handleSubmit, reset } = useForm<FormValues>();
    const searchValue = watch("search");
    const dispatch = useAppDispatch();


    useEffect(() =>
    {
        if (searchValue !== "" || searchValue !== null)
        {
            dispatch(moviesActions.setSearchValue(searchValue));

        }
    }, [searchValue, dispatch]);




    function onClean()
    {
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onClean)} >
                <input type="text" placeholder="search" {...register("search")} />
                <input type="submit" value="&#9747;" className="menu-button search" />
            </form>
        </div>
    );
};

export { SearshForm };
