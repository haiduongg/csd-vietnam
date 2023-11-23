import PropTypes from "prop-types";

CategoryGallery.propTypes = {
    dataCategory: PropTypes.object.isRequired,
}

function CategoryGallery({dataCategory}) {
    return (
        <div className='container'>
            <div className='heading container mt-8 mb-6'>
                <h1 className='text-center font-bold mb-3'>Category {dataCategory.name}</h1>
                <p className='text-center'>This is category {dataCategory.name} image gallery.</p>
            </div>
            <div className='gallery grid grid-cols-4 gap-6'>
                {dataCategory.images && dataCategory.images?.map((image, index) => {
                    return (
                        <img src={image} alt={`image-${index}`} key={image.id}/>
                    )
                })}
                {!dataCategory.images && <span>Uploading ...</span>}
            </div>
        </div>
    );
}

export default CategoryGallery;