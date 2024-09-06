import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FormImage from "../FormImage";
import {
  updateUser,
  resetSuccessAndError,
  setEditUser,
} from "../../features/authSlice";

export default function EditProfileModal({ show, onClose }) {
  const dispatch = useDispatch();
  const { authorId } = useParams();
  const { editUser, isSuccess, isError, message } = useSelector((state) => state.auth);

  const [profile, setProfile] = useState({
    image: null,
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
  });
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    if (show && editUser) {
      setProfile({
        image: editUser.image,
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        bio: editUser.bio,
        email: editUser.email,
      });
      setProfileImage(editUser.image ? URL.createObjectURL(editUser.image) : "");
    }
  }, [show, editUser]);

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        dispatch(resetSuccessAndError());
      }, 3000);
    }
  }, [isSuccess, isError, dispatch]);

  const modalEl = document.getElementById("editProfileModal");

  const editProfileModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  useEffect(() => {
    if (show) {
      editProfileModal?.show();
    } else {
      editProfileModal?.hide();
    }
  }, [show, editProfileModal]);

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("id", authorId);
    if (profile.image) {
      formData.append("image", profile.image);
    }
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("bio", profile.bio);
    formData.append("email", profile.email);
    return formData;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const formData = buildFormData();
      dispatch(updateUser({ userId: authorId, userData: formData }));
      onClose();
    }
  };

  const isFormValid = () => {
    const form = document.getElementById("profileForm");
    form.classList.add("was-validated");
    return form.checkValidity();
  };

  const onImageChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));
      setProfile({ ...profile, image: file });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="editProfileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editProfileModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form id="profileForm" noValidate>
                <FormImage image={profileImage} onChange={onImageChange} />
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Please provide a first name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Please provide a last name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">
                    Bio
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please provide a bio.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Please provide a valid email.</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EditProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
