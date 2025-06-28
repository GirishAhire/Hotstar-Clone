import {
    Backdrop,
    PopupWrapper,
    ImageContainer,
    BlurredBackground,
    PopupImage,
    Content,
    CloseButton,
} from './MovieDetailPopup.styles';

const MovieDetailPopup = ({ movie, onClose }) => {
    return (
        <Backdrop onClick={onClose}>
            <PopupWrapper onClick={(e) => e.stopPropagation()}>
                <ImageContainer>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <BlurredBackground image={movie.imageUrl} />
                    <PopupImage src={movie.imageUrl} alt={movie.title} />
                </ImageContainer>
                <Content>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </Content>
            </PopupWrapper>
        </Backdrop>
    );
};

export default MovieDetailPopup;
