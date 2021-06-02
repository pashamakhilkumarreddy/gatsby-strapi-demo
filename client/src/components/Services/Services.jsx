import React, { memo } from "react"
import ServicesData from "../../constants/services"
import Title from "../Title/Title"
import Service from "./Service"

const Services = () => {
  return (
    <>
      <Title
        title="Services"
        containerClass="is-justify-content-center"
        titleClass="is-2"
      />
      <div className="columns is-centered is-vcentered is-mobile mt-4">
        {ServicesData.map(({ id, icon, title, description }) => (
          <Service
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  )
}

export default memo(Services)
