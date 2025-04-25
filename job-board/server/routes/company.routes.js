import express from "express";
import {
  changeJobApplicationStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJob,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register", registerCompany);
router.post("/login", loginCompany);
router.get("/company", getCompanyData);
router.post("post-job", postJob);
router.get("/applicants", getCompanyJobApplicants);
router.get("/list-jobs", getCompanyPostedJob);
router.post("/change-status", changeJobApplicationStatus);
router.post("/change-visibility", changeVisibility);

export default router;
