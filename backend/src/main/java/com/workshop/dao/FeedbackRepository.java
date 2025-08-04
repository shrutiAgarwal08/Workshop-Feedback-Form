package com.workshop.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.workshop.entity.Feedback;
public interface FeedbackRepository extends JpaRepository<Feedback,Integer>{}