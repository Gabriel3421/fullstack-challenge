import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Modal, Input, Select, message, DatePicker, Button } from 'antd';
import { phoneMask } from '../../utils/phoneMask';
import { api } from '../../services/api';
import "./styles.css"


function NewOrderModal({ isModalVisible, changeModalVisibility }) {
  const { Option } = Select;
  const nameRegex = RegExp(/^[a-zA-Z\u00C0-\u00FF ]+$/)
  const phoneRegex = new RegExp(/^\([0-9]{2}\) [9][0-9]{4}\-[0-9]{4}/g)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get("/categories").then(response => {
      setCategories(response.data)
    }).catch((error) => {
      console.log(error)
      message.error("An error occurred while fetching categories!, please try again later.")
    })
  }, [])
  const formik = useFormik({
    initialValues: {
      contactName: '',
      contactPhone: '',
      agency: '',
      description: '',
      company: '',
      category: '',
      deadline: '',
    },
    validationSchema: Yup.object().shape({
      contactName: Yup.string().matches(nameRegex, 'Numbers are not allowed.').required("This is a required field"),
      contactPhone: Yup.string().required("This is a required field").matches(phoneRegex, "Format not acceptable, try like this 11 9 1111-1111"),
      agency: Yup.string().required("This is a required field"),
      description: Yup.string().required("This is a required field"),
      company: Yup.string().required("This is a required field"),
      category: Yup.string().required("This is a required field"),
      deadline: Yup.string().required("This is a required field"),
    }),
    onSubmit: (values) => {
      api.post("/orders", {
        agency: values.agency,
        description: values.description,
        company: values.company,
        deadline: values.deadline,
        category_id: values.category,
        contact: values.contactName + "#" + values.contactPhone
      }).then(response => {
        handleCloseModal()
      }).catch(error => {
        console.log(error)
        message.error("An error occurred while creating order!, please try again later.")
      })
    },
  })

  const handleCloseModal = () => {
    changeModalVisibility(false);
    formik.resetForm()
  };
  return (
    <Modal
      title="New Order"
      visible={isModalVisible}
      width={"80%"}
      footer={null}
      onCancel={handleCloseModal}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="input-grid-group">
            <div className="input">
              <label htmlFor="contactName" className="label">Contact Name</label>
              <Input
                id="contactName"
                type="text"
                name="contactName"
                onChange={formik.handleChange}
                value={formik.values.contactName}
                className="form-input"
              />
              {formik.touched.contactName && formik.errors.contactName ? (<div className="form-field-edit-validate">{formik.errors.contactName}</div>) : null}
            </div>
            <div className="input">
              <label htmlFor="contactPhone" className="label">Contact Phone</label>
              <Input
                id="contactPhone"
                type="text"
                name="contactPhone"
                onChange={formik.handleChange}
                maxLength="15"
                value={phoneMask(formik.values.contactPhone)}
                className="form-input"
              />
              {formik.touched.contactPhone && formik.errors.contactPhone ? (<div className="form-field-edit-validate">{formik.errors.contactPhone}</div>) : null}
            </div>
          </div>
          <div className="input">
            <label htmlFor="description" className="label">Order Description</label>
            <Input.TextArea
              rows="4"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (<div className="form-field-edit-validate">{formik.errors.description}</div>) : null}
          </div>
          <div className="input">
            <label htmlFor="category" className="label">Select the order category</label>
            <Select
              id="category"
              name="category"
              size='middle'
              showSearch
              className="form-field-select-signup"
              onChange={(value) => formik.setFieldValue('category', value)}
              value={formik.values.category}
            >
              {categories.map((category) => (
                <Option key={category.id} value={category.id}>{category.name}</Option>
              ))}
            </Select>
            {formik.touched.category && formik.errors.category ? (<div className="form-field-edit-validate">{formik.errors.category}</div>) : null}
          </div>
        </div>
        <div>
          <div className="input">
            <label htmlFor="agency" className="label">Real Estate Agency</label>
            <Input
              id="agency"
              type="text"
              name="agency"
              onChange={formik.handleChange}
              value={formik.values.agency}
              className="form-input"
            />
            {formik.touched.agency && formik.errors.agency ? (<div className="form-field-edit-validate">{formik.errors.agency}</div>) : null}
          </div>
          <div className="input">
            <label htmlFor="company" className="label">Company</label>
            <Input
              id="company"
              type="text"
              name="company"
              onChange={formik.handleChange}
              value={formik.values.company}
              className="form-input"
            />
            {formik.touched.company && formik.errors.company ? (<div className="form-field-edit-validate">{formik.errors.company}</div>) : null}
          </div>

          <div className="input">
            <label htmlFor="deadline" className="label">DeadLine</label>
            <DatePicker
              id="deadline"
              name="deadline"
              format="DD/MM/YYYY"
              value={formik.values.deadline}
              placeholder="Sex, 27 dez 2021"
              onChange={(date, _) => formik.setFieldValue('deadline', date)}
            />
            {formik.touched.deadline && formik.errors.deadline ? (<div className="form-field-edit-validate">{formik.errors.deadline}</div>) : null}
          </div>
          <Button type="primary" htmlType="submit" className="submitButton">Save</Button>
        </div>
      </form>
    </Modal>
  )
}

export default NewOrderModal;