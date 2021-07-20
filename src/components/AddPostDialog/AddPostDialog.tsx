import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CgAdd } from 'react-icons/cg'
import { Post } from '../../data/posts-mock';
import { PostsContext } from '../../contexts/PostsContext';
import { LinearProgress } from '@material-ui/core';
import { getMostOccurentTime, getNextDate } from '../../utils/utils';
import FeedBack from './SnackBar';

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}


export default function AddPostDialog() {
    const [open, setOpen] = React.useState(false);
    const { posts, setPosts, setFeed } = useContext(PostsContext)
    const [loading, setLoading] = useState(false)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [postToAdd, setPostToAdd] = useState<Post>({
        caption: "",
        changed: false,
        image: "",
        id: posts.length + 1,
        date: getNextDate(posts),
        time: getMostOccurentTime(posts),
        state: "Brouillon"
    })
    useEffect(() => {
        setPostToAdd({
            caption: "",
            changed: false,
            image: "",
            id: posts.length + 1,
            date: getNextDate(posts),
            time: getMostOccurentTime(posts),
            state: "Brouillon"
        })
    }, [posts])
    const [image, setImage] = useState<any>(null)
    const [feedBackState, setFeedBackState] = useState<any>({ open: false, message: "Successfully created", severity: "success" })

    const upload = (file: File) => {
        setLoading(true)
        const url = "https://api.cloudinary.com/v1_1/photomania123/image/upload";

        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "photo_");

        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(data => {
            setFeed([{ ...postToAdd, image: data.url }, ...posts])
            setPosts([{ ...postToAdd, image: data.url }, ...posts])
            setLoading(false)
            handleClose()
            setFeedBackState({ open: true, message: "Successfully created", severity: "success" })
        }).catch(err => {
            setFeedBackState({ open: true, message: "An error occured", severity: "error" })
        })
    }


    return (
        <div>
            <FeedBack message={feedBackState.message} severity={feedBackState.severity} feedBack={feedBackState} setFeedBack={setFeedBackState} />
            <Button color="primary" style={{ color: "#74C5F4" }} onClick={handleClickOpen}>
                <CgAdd color="#74C5F4" size="2vh" /> Ajouter un média
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                {loading ? <LinearProgress /> : <div> </div>}
                <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a new post
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="file"
                        onChange={(e: any) => setImage(e.target.files[0])}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button disabled={loading} onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button disabled={loading} onClick={() => upload(image)} color="primary">
                        Confirmer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
