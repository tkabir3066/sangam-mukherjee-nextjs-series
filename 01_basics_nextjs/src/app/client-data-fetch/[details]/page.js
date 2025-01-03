const UserDetails = async ({ params }) => {
  const { details } = await params;
  console.log(details);
  return <div>UserDetails</div>;
};

export default UserDetails;
