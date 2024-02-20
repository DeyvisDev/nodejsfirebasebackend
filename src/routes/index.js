
const {db} = require('../firebase')

const { Router } = require("express");
const router = Router();

router.get('/', async (req,res) =>
{
    const querySnapshot = await db.collection('users').get();

    const users = querySnapshot.docs.map(doc =>
        ({
            id:doc.id,
            country: doc.data().country,
            email: doc.data().email,
            personType: doc.data().personType,
            usuario: doc.data().usuario


        }))
        console.log(users);

    res.send('Holaaaa');

})

module.exports = router;