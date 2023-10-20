import Cors from 'cors';
import { json } from 'micro';
import pb from '@/helpers/api/PocketBase';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async (req, res) => {
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    try {
      const { email, password } = await json(req);
      await pb.collection('users').authWithPassword(email, password);

      if (pb.authStore.isValid) {
        res.setHeader('set-cookie', pb.authStore.exportToCookie());
        res.status(200).json({ message: `Logged in successfully` });
      } else {
        res.status(400).json({ message: `Unable to login` });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: `Unable to login` });
    }
  } else {
    res.status(400).json({ message: `Only POST request is supported` });
  }
};
