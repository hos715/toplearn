import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { handleCourseUpdate } from './../../../actions/courses';

const NewCourseDialog = ({ showDialog, closeDialog, course }) => {

    const [courseId, setCourseId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setCourseId(course._id);
        setTitle(course.title);
        setPrice(course.price);
        setImageUrl(course.imageUrl);
        setInfo(course.info);

        return () => {
            setCourseId();
            setTitle();
            setPrice();
            setImageUrl();
            setInfo();
        };
    }, [course]);

    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData();
        data.append("title", title);
        data.append("price", Number.parseInt(price));
        if (event.target.imageUrl.files[0])
            data.append("imageUrl", event.target.imageUrl.files[0]);
        else data.append("imageUrl", imageUrl);
        data.append("info", info);
        console.log(data);
        dispatch(handleCourseUpdate(courseId, data))
        closeDialog();

    }

    return (
        <DialogOverlay isOpen={showDialog} onDismiss={closeDialog} style={{ backgroundColor: "darkgray" }}>
            <DialogContent
                style={{
                    border: "3px solid gray",
                    borderRadius: "10px",
                    boxShadow: "0 10px 50px #333333"
                }}
            >
                <div className="inner form-layer">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="?????????? ????????"
                            aria-describedby="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <input
                            type="text"
                            name="price"
                            style={{ marginBottom: 3 }}
                            className="form-control"
                            placeholder="???????? ???????? ???? ??????????"
                            aria-describedby="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <input
                            type="file"
                            name="imageUrl"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                        />
                        <textarea
                            name="info"
                            placeholder="?????????????? ????????"
                            className="form-control"
                            style={{ marginBottom: 3 }}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                        >
                            ???????????? ????????
                        </button>
                        <button
                            className="btn btn-warning mr-5"
                            style={{ margin: "1em" }}
                            onClick={closeDialog}
                        >
                            ????????????
                        </button>
                    </form>
                </div>
            </DialogContent>
        </DialogOverlay>
    );
}

export default NewCourseDialog;