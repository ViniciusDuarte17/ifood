export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToRestaurantPage = (navigate, id) => {
    navigate(`/restaurante/${id}`)
}

export const goToCart = (navigate) => {
    navigate("/cart")
}
export const goToProfile = (navigate) => {
    navigate("/profile")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToRegisterClient = (navigate) => {
    navigate("/cadastro")
}

export const goToRegisterEnddres = (navigate) => {
    navigate("/registro/enderenco")
}

export const goToEditProfile = (navigate) => {
    navigate('/profile/editar')
}

export const goToBack = (navigate) => {
    navigate(-1)
}
