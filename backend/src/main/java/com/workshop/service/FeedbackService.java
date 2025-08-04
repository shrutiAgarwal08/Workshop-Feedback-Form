package com.workshop.service;
import java.util.List;
import com.workshop.entity.Feedback;
public interface FeedbackService {
	Feedback savefeedback(Feedback feedback);
	List<Feedback> getallfeedbacks();
	void deleteFeedbackById(int id);         }