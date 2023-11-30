
export default function FormatPrice(props) {
  return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
  }).format(props.price*75)
}
