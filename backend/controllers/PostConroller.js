import Post from "../services/Post.js";
import { tryCatchMiddleware } from "../middleware/tryCatchMiddleware.js";

class PostConroller {

    async create(req, res) {
        try {
            const { en, ua, userId, transcription, sound, date } = req.body;

            console.log(req.body);

            const post = await Post.create(
                {
                    en,
                    ua,
                    userId,
                    transcription,
                    sound,
                    date
                });

            return res.json(post);

        } catch (error) {
            res.status(500);
        }
    }

    async getAll(req, res) {

        tryCatchMiddleware(req, res, async () => {

            const posts = await Post.find({ userId: req.body.userId });

            return res.json(posts.reverse());

        })
    }

    // //update all data in base!!!
    // async getAll(req, res) {

    //     tryCatchMiddleware(req, res, async () => {

    //         const posts = await Post.find(); //{ userId: "" }

    //         posts.forEach(async item => {

    //             // console.log(item);

    //             item.userId = '1';
    //             item.transcription = '';
    //             item.sound = '';
    //             item.date = '17-06-2022';

    //             console.log(item);
    //             console.log(item._id);

    //             // await Post.findByIdAndUpdate(item._id, item, { new: true });
    //         })

    //         // console.log(posts);

    //         return res.json(posts.reverse());

    //     })
    // }

    async getOne(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({ message: 'id не вказано' });
            }
            const post = await Post.findById(id);

            return res.json(post);
        } catch (error) {
            res.status(500);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;

            if (!post._id) {
                res.status(400).json({ message: 'id не вказано' });
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });

            return res.json(updatedPost);
        } catch (error) {
            res.status(500);//.json(error);
            // res.json(error);
        }
    }

    async del(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                res.status(400).json({ message: 'id не вказано' });
            }

            const deletedPost = await Post.findByIdAndDelete(id);

            return res.json(deletedPost);
        } catch (error) {
            res.status(500).json({ message: null });
        }
    }
}

export default new PostConroller();