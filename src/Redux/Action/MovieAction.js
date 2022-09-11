import { movieService } from "../../Service/MovieService"
import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../Type/MovieType"
export const AddNewMovieAction = (data) => {
    return (dispatch) => {
        movieService.AddNewMovie(data).then((result) => {
            alert("Thêm Phim Thành Công")
        }).catch((error) => {
            console.log(error)
            alert("Thêm Phim Thất Bại: " + error.response?.message);
        })
    }
}
export const GetMovieListAction = (dispatch) => {
    movieService.GetMovieList().then((result) => {
        let action = {
            type: GET_MOVIE_LIST,
            movieList: result.data.content
        }
        dispatch(action)
    }).catch((error) => { console.log(error) })
}
export const GetMovieInfoAction = (id) => {
    return (dispatch) => {
        movieService.GetMovieInfo(id).then((result) => {
            let action = {
                type: GET_MOVIE_DETAIL,
                movieDetail: result.data.content
            }
            dispatch(action)
        }).catch((error) => {
            console.log(error)
        })
    }
}
