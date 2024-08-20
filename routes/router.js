const express = require('express');
const router = express.Router();
const { authenticateLocal, authenticateGoogle, authenticateJwt } = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');
const 協力会社_T_Controller = require('../controllers/協力会社_T_Controller');
const 海上コンテナ受注_T_Controller = require('../controllers/海上コンテナ受注_T_Controller');

router.post('/login', authenticateLocal, authController.login);
router.get('/tokenLogin', authenticateJwt, authController.login);
router.get('/google', authenticateGoogle);
router.get('/google/callback', authenticateGoogle, authController.login);
router.post('/register', authController.register);

//協力会社_T
router.get('/partnercompnay', authenticateJwt, 協力会社_T_Controller.get);
router.post('/partnercompnay', authenticateJwt, 協力会社_T_Controller.set);
router.put('/partnercompnay/:id', authenticateJwt, 協力会社_T_Controller.put);
router.delete('/partnercompnay/:id', authenticateJwt, 協力会社_T_Controller.delete);

//協力会社_T
router.get('/order', authenticateJwt, 海上コンテナ受注_T_Controller.get);
router.post('/order', authenticateJwt, 海上コンテナ受注_T_Controller.set);
router.put('/order/:id', authenticateJwt, 海上コンテナ受注_T_Controller.put);
router.delete('/order/:id', authenticateJwt, 海上コンテナ受注_T_Controller.delete);

module.exports = router;
