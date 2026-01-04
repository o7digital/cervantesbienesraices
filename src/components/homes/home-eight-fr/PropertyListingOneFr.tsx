"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Property {
  id: number;
  Title: string;
  Address: string;
  Operation?: string;
  Price?: number;
  Bedrooms?: number;
  Bathrooms?: number;
  Featured?: boolean;
  Image?: {
    directus_files_id?: {
      id: string;
    };
  };
}

const API_URL = "https://cervantes-directus-backend-production.up.railway.app";

const PropertyListingOneFr = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `${API_URL}/items/propriedades?filter[Featured][_eq]=true&fields=id,Title,Address,Operation,Price,Bedrooms,Bathrooms,Image.directus_files_id.id,Featured`
        );
        const data = await res.json();
        setProperties(data.data || []);
      } catch (err) {
        console.error("Error loading properties from Directus:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">Chargement des propriétés...</p>
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="text-center py-5">
        <p className="fs-20">Aucune propriété en vedette pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="property-listing-one mt-170 xl-mt-120">
      <div className="container container-large">
        <div className="position-relative">
          <div className="title-one text-center mb-25 lg-mb-10 wow fadeInUp">
            <h3>Propriétés en Vedette</h3>
            <p className="fs-22 mt-xs">Découvrez nos meilleures propriétés à vendre et à louer.</p>
          </div>

          <div className="row gx-xxl-5">
            {properties.map((item) => {
              const imageId = item.Image?.directus_files_id?.id;
              const imageUrl = imageId
                ? `${API_URL}/assets/${imageId}`
                : "/assets/images/media/img_01.jpg";

              return (
                <div key={item.id} className="col-lg-4 col-md-6 mt-40 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="listing-card-four overflow-hidden d-flex align-items-end position-relative z-1">
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "400px",
                        width: "100%",
                      }}
                    ></div>

                    <div className="property-info tran3s w-100 p-20 bg-white position-absolute bottom-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="pe-3">
                          <Link href={`/fr/property/${item.id}`} className="title fw-500 tran4s">
                            {item.Title || "Propriété sans titre"}
                          </Link>
                          <div className="address tran4s">
                            {item.Address || "Adresse non disponible"}
                          </div>
                        </div>
                        <Link href={`/fr/property/${item.id}`} className="btn-four inverse">
                          <span>Voir plus</span> <i className="bi bi-arrow-up-right"></i>
                        </Link>
                      </div>

                      <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between mt-3">
                        <li>
                          <strong className="color-dark fw-500">{item.Bedrooms ?? "-"}</strong>
                          <span className="fs-16">Chambres</span>
                        </li>
                        <li>
                          <strong className="color-dark fw-500">{item.Bathrooms ?? "-"}</strong>
                          <span className="fs-16">Salles de bain</span>
                        </li>
                        <li>
                          <strong className="color-dark fw-500">
                            {item.Price ? `$${item.Price.toLocaleString("fr-FR")}` : "Nous contacter"}
                          </strong>
                          <span className="fs-16">{item.Operation || "Vente/Location"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-100 md-mt-60">
            <Link href="/fr/listing_06" className="btn-eight">
              <span>Voir toutes les propriétés</span> <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingOneFr;
