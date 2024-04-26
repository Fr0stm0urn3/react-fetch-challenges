import { Routes, Route } from "react-router-dom"
import ChallengeOne from "../pages/ChallengeOne"
import ChallengeTwo from "../pages/ChallengeTwo"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ChallengeOne />} />
      <Route path="/challenge-two" element={<ChallengeTwo />} />
    </Routes>
  )
}

export default Router
