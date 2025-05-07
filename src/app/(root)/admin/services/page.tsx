import ServiceCard from "@/components/shared/serviceCard";

const AdminServices = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-6">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default AdminServices;
