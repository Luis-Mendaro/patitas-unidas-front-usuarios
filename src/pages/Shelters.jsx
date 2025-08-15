import { useState } from 'react';
import { FaDog, FaMapMarkerAlt, FaCalendarAlt, FaInstagram, FaFacebook, FaTwitter, FaArrowRight, FaChevronLeft, FaChevronRight, FaPlus, FaThumbsUp, FaPaw, FaCat } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useApi } from '../hooks/useApi';
import { useEffect } from 'react';
import { current } from '@reduxjs/toolkit';

function SheltersList() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const [sheltersPerPage] = useState(6); // Número de refugios por página
    const { fetchShelters } = useApi();
    const [shelters, setShelters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalShelters, setTotalShelters] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const loadShelters = async (page = 1) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetchShelters({
                page: page,
                limit: sheltersPerPage,
            });

            if (response && response.data) {
                setShelters(response.data.shelters);
                setTotalShelters(response.data.total);
                setTotalPages(response.data.totalPages);
            }
        } catch (err) {
            setError('Error al cargar los refugios. Por favor, intenta nuevamente.');
            console.error('Error loading shelters:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadShelters(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return shelters && (
        <main className="container py-5">
            {/* Header */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 fw-bold text-dark mb-3">
                        Refugios Participantes
                    </h1>
                    <p className="lead text-secondary">
                        Conoce los refugios que forman parte de nuestra comunidad y trabajan para encontrar un hogar lleno de amor para cada animal
                    </p>
                </div>
            </div>

            {/* Paginación */}
            <div className="row mb-4">
                <div className="col-12 text-end">
                    <span className="text-muted">
                        Cantidad total de refugios: {totalShelters}
                    </span>
                </div>
            </div>

            {/* Lista de refugios */}
            <div className="row g-4">
                {shelters.map((shelter) => (
                    <div key={shelter.id} className="col-md-6 col-lg-4">
                        <div
                            className="card h-100 shadow-sm border-0"
                            style={{
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                borderRadius: '15px'
                            }}
                            onClick={() => navigate(`/refugios/${shelter.id}`)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                            }}
                        >
                            {/* Imagen del refugio */}
                            <div className="position-relative overflow-hidden" style={{ borderRadius: '15px 15px 0 0' }}>
                                <img
                                    src={shelter.images[0]}
                                    alt={`Imagen de ${shelter.name}`}
                                    className="card-img-top"
                                    style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                                <div
                                    className="position-absolute top-0 end-0 m-3"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        borderRadius: '15px',
                                        padding: '5px 10px'
                                    }}
                                >
                                    <small className="text-dark fw-bold">
                                        {shelter.pets.length} peludos
                                    </small>
                                </div>
                            </div>

                            <div className="card-body d-flex flex-column p-4">
                                {/* Nombre y ubicación */}
                                <div className="mb-3">
                                    <h5 className="card-title fw-bold mb-2" style={{ color: '#2c3e50' }}>
                                        {shelter.name}
                                    </h5>
                                    <div className="d-flex align-items-center text-muted mb-2">
                                        <FaMapMarkerAlt className="me-2 patas-text-primary" />
                                        <small>{shelter.location}</small>
                                    </div>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaCalendarAlt className="me-2 patas-text-primary" />
                                        <small>Desde {new Date(shelter.createdAt).toLocaleDateString("es-UY")}</small>
                                    </div>
                                </div>

                                {/* Recomendaciones */}
                                <div className="d-flex align-items-center mb-3">
                                    <FaThumbsUp className="text-success me-2" />
                                    <span className="fw-bold text-dark me-2">{shelter.rating.length}</span>
                                    <small className="text-muted">personas lo recomiendan</small>
                                </div>

                                {/* Descripción */}
                                <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
                                    {shelter.description.length > 120
                                        ? `${shelter.description.substring(0, 120)}...`
                                        : shelter.description
                                    }
                                </p>

                                {/* Redes sociales */}
                                <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
                                    <div className="d-flex gap-2">
                                        <a href="https://www.instagram.com/"><div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                backgroundColor: '#f8f9fa',
                                                border: '1px solid #dee2e6'
                                            }}
                                        >
                                            <FaInstagram className="patas-text-primary" style={{ fontSize: '14px' }} />
                                        </div></a>
                                        <a href="https://www.facebook.com/"><div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                backgroundColor: '#f8f9fa',
                                                border: '1px solid #dee2e6'
                                            }}
                                        >
                                            <FaFacebook className="patas-text-primary" style={{ fontSize: '14px' }} />
                                        </div></a>
                                        <a href="https://x.com/"><div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                backgroundColor: '#f8f9fa',
                                                border: '1px solid #dee2e6'
                                            }}
                                        >
                                            <FaTwitter className="patas-text-primary" style={{ fontSize: '14px' }} />
                                        </div></a>
                                    </div>

                                    <Link to={`/refugios/${shelter.id}`}><button
                                        className="patas-btn patas-btn-primary btn-sm"
                                        style={{
                                            borderRadius: '20px',
                                            padding: '6px 16px',
                                            fontSize: '0.85rem'
                                        }}
                                    >
                                        Ver más
                                        <FaArrowRight className="ms-2" />
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Paginación */}
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="btn btn-outline-dark me-2"
                        >
                            Anterior
                        </button>
                        <span className="align-self-center">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage >= totalPages}
                            className="btn btn-outline-dark ms-2"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <div
                        className="text-center p-5 rounded bg-body"
                    >
                        <h3 className="fw-bold mb-3">¿Tienes un refugio?</h3>
                        <p className="mb-4">
                            Únete a nuestra comunidad y ayuda a más animales a encontrar un hogar
                        </p>
                        <button
                            className="patas-btn patas-btn-lg patas-btn-primary"
                            style={{ borderRadius: '25px', padding: '12px 30px' }}
                        >
                            <span className='text-light'>

                                <FaPlus className="me-2" />
                                Registrar mi refugio
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default SheltersList;