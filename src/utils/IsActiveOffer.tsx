const isActiveOffer = (endDate: string | Date): boolean => {
  const now = new Date();
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  return now <= end;
};

export default isActiveOffer;
